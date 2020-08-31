from rest_framework import viewsets
from core.attendance.models import Daily
from core.attendance.serializers import DailySerializer


class DailyViewSet(viewsets.ModelViewSet):
    queryset = Daily.objects.all()
    serializer_class = DailySerializer
