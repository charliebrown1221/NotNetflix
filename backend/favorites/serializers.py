from dataclasses import fields
from rest_framework import serializers
from .models import Favorites


class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields=['favorite_movie']
        depth=1