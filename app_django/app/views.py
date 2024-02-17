from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework import viewsets, mixins
from django.contrib.auth.models import User
from .models import Customer, Product
from .serializers import CustomerSerializer, LoginSerializer, ProductSerializer
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
        return Response({'token': token.key}, status=status.HTTP_201_CREATED, headers=headers)


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
            "mobileno": user_d.mobileNumber
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

