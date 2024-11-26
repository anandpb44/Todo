from rest_framework import serializers
from .models import *

class Todoserializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields='__all__'