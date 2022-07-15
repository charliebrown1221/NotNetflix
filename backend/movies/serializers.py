from dataclasses import fields
from rest_framework import serializers
from .models import FavoriteMovies, Movies

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields =['user', 'name','overview','year','genres','poster_path']
        depth = 1
    
        


class FavoriteMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteMovies
        fields =['user_id', 'movie_id']
        depth = 1
