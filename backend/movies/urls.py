from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Movies
from .serializers import MoviesSerializer




api_view(['GET'])
@permission_classes([AllowAny])
def get_all_movies(request ):
    if  request.method == 'GET':
       movie = Movies.objects.all()
    serializer = MoviesSerializer(movie,many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
    