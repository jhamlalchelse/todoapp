from rest_framework import serializers
from .models import TodoModel

class Todoserializer(serializers.ModelSerializer):
    class Meta:
        model = TodoModel
        fields = ('id','title','desc','complete')