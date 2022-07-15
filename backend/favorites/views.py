from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import FavoriteMovies
from .serializers import FavoriteMoviesSerializer

# Create your views here.
@api_view([ 'GET'])
@permission_classes([IsAuthenticated])
def get_all_favorite_movie(request,user_id):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if  request.method == 'GET':
          movie = FavoriteMovies.objects.filter(user_id=user_id)
          serializer = FavoriteMoviesSerializer(movie,many=True)
          return Response(serializer.data, status=status.HTTP_200_OK)
  
  
@api_view([ 'POST'])
@permission_classes([IsAuthenticated])
def add_favorite_movie(request, user_id):
   favorite=get_object_or_404(FavoriteMovies,user_id=user_id)
   if request.method == 'POST':
       serializer = FavoriteMoviesSerializer(favorite,data=request.data)
       if serializer.is_valid(raise_exception=True):
         serializer.save(user=request.user)
         return Response(serializer.data, status=status.HTTP_201_CREATED)
   return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
