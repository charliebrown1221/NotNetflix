from dataclasses import fields
from rest_framework import serializers
from .models import  Movies

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields =['user', 'name','overview','year','genres','poster_path']
        depth = 1
    
        



