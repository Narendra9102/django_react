from django.urls import path, include
from .views import RegistrationViewSet, LoginViewSet ,ProductView , BuyView , SellView , FertilizerView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'registration', RegistrationViewSet)
router.register(r'login', LoginViewSet, basename="login")
router.register(r'product',ProductView, basename="product")
router.register(r'fertilizer',FertilizerView, basename="fertilizer")
router.register(r'buyer',BuyView, basename="buyer")
router.register(r'seller',SellView, basename="seller")

urlpatterns = [
    path('',views.index,name='index'),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
