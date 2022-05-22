from django.db import models

# Create your models here.

class TodoModel(models.Model):
    title = models.CharField(max_length=100)
    desc = models.CharField(max_length=100)
    complete = models.BooleanField(default=False)
