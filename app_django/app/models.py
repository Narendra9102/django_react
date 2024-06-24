
from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class Customer(models.Model):
    customerName = models.CharField(max_length=255)
    mobileNumber = models.CharField(max_length=15)
    emailId = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Customer')

    def __str__(self):
        return self.customerName  +" - "+self.mobileNumber

class Product(models.Model):
    name = models.CharField(max_length=200,null=True,blank=True)
    image = models.ImageField(null=True,blank = True,upload_to="images")
    brand = models.CharField(max_length=200,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    rating = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    price = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    p_id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.name +" | "+self.brand +" | " + str(self.price)

class Fertilizer(models.Model):
    name = models.CharField(max_length=200,null=True,blank=True)
    image = models.ImageField(null=True,blank = True,upload_to="images")
    brand = models.CharField(max_length=200,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    rating = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    price = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    f_id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.name +" | "+self.brand

class Buyer(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images")
    phno = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(unique=True)
    address = models.TextField(null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    b_id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Seller(models.Model):
    s_id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="images")
    phno = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(unique=True)
    address = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Pros(models.Model):
    seller = models.ForeignKey(Seller, related_name='products', on_delete=models.CASCADE)
    category = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.category} - {self.price}"

class Cart(models.Model):
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE, related_name='cart')

    def __str__(self):
        return f"{self.customer}'s Cart"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.cart.customer}'s CartItem: {self.content_object}"
