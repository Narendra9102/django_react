# Generated by Django 4.2.3 on 2024-05-01 15:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_alter_cartitem_cart'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitem',
            name='product',
        ),
    ]
