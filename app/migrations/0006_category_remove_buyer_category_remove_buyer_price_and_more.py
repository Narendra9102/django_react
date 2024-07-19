# Generated by Django 4.2.3 on 2024-03-05 13:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_seller_buyer_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.RemoveField(
            model_name='buyer',
            name='category',
        ),
        migrations.RemoveField(
            model_name='buyer',
            name='price',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='category',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='price',
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=12)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.category')),
            ],
        ),
        migrations.AddField(
            model_name='buyer',
            name='categories',
            field=models.ManyToManyField(to='app.category'),
        ),
        migrations.AddField(
            model_name='seller',
            name='categories',
            field=models.ManyToManyField(to='app.category'),
        ),
    ]
