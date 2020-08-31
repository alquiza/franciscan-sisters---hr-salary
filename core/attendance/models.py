from django.db import models
from core.human.models import Identity

class Daily(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    time_in = models.DateTimeField(auto_created=True, auto_now_add=True)
    time_out = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self(Daily)
