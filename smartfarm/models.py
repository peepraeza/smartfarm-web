from django.conf import settings
from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator

"""
Category of plants that are created by users
"""
class Plant(models.Model):
    _type_name = models.CharField(max_length=200)
    _growth_days = models.IntegerField(validators=MinValueValidator(0))
    _create_record_timestamp = models.DateTimeField(default=timezone.now)
    _description = models.TextField()

    def __str__(self):
        return self._type_name
        
"""
Vegetables that are being planted in the farm
"""
class Vegetable(models.Model):
    
    _type = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    _start_plant_timestamp = models.DateTimeField(blank=False)
    _end_plant_timestamp = models.DateTimeField(blank=False)
    _create_record_timestamp = models.DateTimeField(default=timezone.now)
    _is_harvested = models.BooleanField()
    
    def __str__(self):
        return "{}_{}".format(self._type_name, self._create_record_timestamp)