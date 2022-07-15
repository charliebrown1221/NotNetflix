from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Favorites
from .serializers import FavoritesSerializer

# Create your views here.
@api_view([ 'GET','POST'])
@permission_classes([IsAuthenticated])
def favorited_movies (request, movie):
   print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
   if  request.method == 'GET':
      favorite = Favorites.objects.all(movie=movie)
      serializer = FavoritesSerializer(favorite, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
   elif request.method == 'POST':
      favorite=get_object_or_404(Favorites,movie=movie)
      serializer = FavoritesSerializer(favorite,data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save(user=request.user)
      return Response(serializer.data, status=status.HTTP_201_CREATED)