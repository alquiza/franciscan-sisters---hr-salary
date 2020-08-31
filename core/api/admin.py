from django.contrib import admin
from core.human.models import Identity, Employee, Contact, Record
from core.attendance.models import Daily

admin.site.register(Daily)
admin.site.register(Identity)
admin.site.register(Employee)
admin.site.register(Contact)
admin.site.register(Record)

