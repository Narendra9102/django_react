# Generated by Django 4.2.3 on 2024-03-05 14:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0010_category_price_remove_buyer_category_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='buyerprice',
            name='buyer',
        ),
        migrations.RemoveField(
            model_name='buyerprice',
            name='price',
        ),
        migrations.RemoveField(
            model_name='sellercategory',
            name='category',
        ),
        migrations.RemoveField(
            model_name='sellercategory',
            name='seller',
        ),
        migrations.RemoveField(
            model_name='sellerprice',
            name='price',
        ),
        migrations.RemoveField(
            model_name='sellerprice',
            name='seller',
        ),
        migrations.RemoveField(
            model_name='buyer',
            name='categories',
        ),
        migrations.RemoveField(
            model_name='buyer',
            name='prices',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='categories',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='prices',
        ),
        migrations.AddField(
            model_name='buyer',
            name='category',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='buyer',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True),
        ),
        migrations.AddField(
            model_name='seller',
            name='category',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='seller',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Customer', to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='BuyerCategory',
        ),
        migrations.DeleteModel(
            name='BuyerPrice',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Price',
        ),
        migrations.DeleteModel(
            name='SellerCategory',
        ),
        migrations.DeleteModel(
            name='SellerPrice',
        ),
    ]
