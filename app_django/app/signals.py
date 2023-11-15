
from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Customer

@receiver(post_delete, sender=Customer)
def delete_auth_user(sender, instance, **kwargs):
    try:
        user = User.objects.get(username=instance.emailId)
        user.delete()
    except User.DoesNotExist:
        pass
