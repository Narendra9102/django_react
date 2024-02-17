
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Customer , Product

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['customerName', 'mobileNumber', 'emailId', 'password']

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
        fields = ['name','image','brand','category','description','rating','price','_id']
