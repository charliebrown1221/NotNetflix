from django.db import models
from authentication.models import User


# Create your models here.
class Movies(models.Model):
       user = models.ForeignKey(User, on_delete=models.CASCADE)
    #    id = models.IntegerField('primary_key=True')
       name=models.CharField(max_length=500)
       year=models.CharField(max_length=500)
       overview=models.CharField(max_length=1000)
       poster_path=models.CharField(max_length=500)