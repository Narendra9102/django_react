from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Customer, Product, Buyer, Seller, Fertilizer, Pros, Cart, CartItem
from django.contrib.contenttypes.models import ContentType

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['customerName', 'mobileNumber', 'emailId', 'password','user_id']

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request=self.context.get('request'), username=email, password=password)

        if not user or not user.is_active:
            raise serializers.ValidationError("Incorrect email and password combination.")

        data['user'] = user
        return data

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'image', 'brand', 'category', 'description', 'rating', 'price', 'p_id']

class FertilizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = ['name', 'image', 'brand', 'category', 'description', 'rating', 'price', 'f_id']

class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = ['name', 'image', 'phno', 'email', 'address', 'category', 'price', 'b_id']

class ProsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pros
        fields = ['category', 'price']

class SellerSerializer(serializers.ModelSerializer):
    products = ProsSerializer(many=True, required=False)

    class Meta:
        model = Seller
        fields = ['name', 'image', 'phno', 'email', 'address', 'products', 's_id']

    def create(self, validated_data):
        products_data = validated_data.pop('products', [])
        seller = Seller.objects.create(**validated_data)
        for product_data in products_data:
            Pros.objects.create(seller=seller, **product_data)
        return seller

class CartItemSerializer(serializers.ModelSerializer):
    content_type = serializers.SlugRelatedField(queryset=ContentType.objects.all(), slug_field='model')
    content_object = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = ['content_type', 'object_id', 'content_object', 'quantity']

    def get_content_object(self, obj):
        if obj.content_type.model == 'product':
            return ProductSerializer(obj.content_object).data
        elif obj.content_type.model == 'fertilizer':
            return FertilizerSerializer(obj.content_object).data
        return None

class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, source='cartitem_set', read_only=True)

    class Meta:
        model = Cart
        fields = ['customer', 'cart_items']
