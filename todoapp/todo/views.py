from rest_framework import viewsets
from .serializers import Todoserializer
from .models import TodoModel

# Create your views here.

class TodoViewset(viewsets.ModelViewSet):
    queryset = TodoModel.objects.all()
    serializer_class = Todoserializer