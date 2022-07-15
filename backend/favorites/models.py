from django.db import models

from backend.movies.models import FavoriteMovies

# Create your models here.
class Favorites(models.Model):
    favorite_movies=models.ForeignKey(FavoriteMovies, on_delete=models.CASCADE)