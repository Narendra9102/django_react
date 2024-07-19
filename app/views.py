from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework import viewsets, mixins , generics
from django.contrib.auth.models import User
from .models import Customer, Product, Buyer, Seller, Fertilizer , Cart, CartItem
from .serializers import CustomerSerializer, LoginSerializer, ProductSerializer, BuyerSerializer, SellerSerializer, FertilizerSerializer, ProsSerializer , CartSerializer
from django.shortcuts import render
from django.http import Http404


def index(request):
    return render(request, 'index.html')

@api_view(['POST'])
def registration(request):
    if request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('emailId')
            password = serializer.validated_data.get('password')

            if User.objects.filter(username=email).exists():
                return Response({"error": "User with this email already exists."}, status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.create_user(username=email, email=email, password=password)
            token, created = Token.objects.get_or_create(user=user)

            return Response({"token": token.key}, status=status.HTTP_201_CREATED)

        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.create_user(username=serializer.validated_data['emailId'],
                                        email=serializer.validated_data['emailId'],
                                        password=serializer.validated_data['password'])
        customer = Customer.objects.create(user=user, **serializer.validated_data)
        token, created = Token.objects.get_or_create(user=user)
        headers = self.get_success_headers(serializer.data)
        return Response({'token': token.key, 'user_id': user.id}, status=status.HTTP_201_CREATED, headers=headers)


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)

            user_data = {
                "token": token.key,
                "email": user.email
            }

            return Response(user_data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)

class LoginViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = User.objects.none()
    serializer_class = LoginSerializer
    authentication_classes = [TokenAuthentication]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        user_d = Customer.objects.get(user=user)
        user_data = {
            "username": user_d.customerName,
            "mobileno": user_d.mobileNumber,
            "user_id": user.id
        }

        user_data = {
            "token": token.key,
            "email": user.email,
            **user_data
        }

        return Response(user_data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_registration(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
        user = User.objects.get(username=customer.emailId)
    except Customer.DoesNotExist:
        raise Http404("Customer does not exist")

    customer.delete()
    user.delete()

    return Response(status=status.HTTP_204_NO_CONTENT)


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class FertilizerView(viewsets.ModelViewSet):
    queryset = Fertilizer.objects.all()
    serializer_class = FertilizerSerializer


class CartListCreateView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class CartRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class BuyView(viewsets.ModelViewSet):
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer

class SellView(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer

    def create(self, request, *args, **kwargs):
        products_data = request.data.pop('products', None)

        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            self.perform_create(serializer)

            if products_data:
                for product_data in products_data:

                    product_data['seller'] = serializer.instance.pk
                    product_serializer = ProsSerializer(data=product_data)
                    if product_serializer.is_valid():
                        product_serializer.save()
                    else:
                        self.perform_destroy(serializer.instance)
                        return Response(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.contenttypes.models import ContentType


class AddToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, product_id):
        user = request.user
        product = Product.objects.get(p_id=product_id)
        customer = Customer.objects.get(user=user)
        cart, created = Cart.objects.get_or_create(customer=customer)

        product_content_type = ContentType.objects.get_for_model(product)
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart, content_type=product_content_type, object_id=product.p_id
        )
        if not created:
            cart_item.quantity += 1
        cart_item.save()
        return Response({'status': 'product added to cart'}, status=status.HTTP_200_OK)

