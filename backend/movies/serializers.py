from dataclasses import fields
from rest_framework import serializers
from .models import FavoriteMovies, Movies

class MoviesSerializer(serializers.ModelSerializer):
    model = Movies
    class Meta:
        fields =['user', 'name','overview','year','poster_path']
        depth = 1
    
        


class FavoriteMoviesSerializer(serializers.ModelSerializer):
    model = FavoriteMovies
    class Meta:
        fields =['user_id', 'movie_id']
        depth = 1
