# Generated by Django 4.2.3 on 2024-05-06 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_remove_cartitem_cart_remove_cartitem_fertilizer_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fertilizer',
            old_name='_id',
            new_name='f_id',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='_id',
            new_name='p_id',
        ),
    ]
