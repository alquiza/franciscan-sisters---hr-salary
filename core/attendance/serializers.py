from rest_framework import serializers
from core.attendance.models import Daily


class DailySerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily
        fields = '__all__'
