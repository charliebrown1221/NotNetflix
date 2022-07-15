from dataclasses import fields
from rest_framework import serializers
from .models import FavoriteMovies


class FavoriteMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteMovies
        fields =['user_id', 'movie_id']
        depth = 1