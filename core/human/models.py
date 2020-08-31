from django.db import models

GENDERS = [
    ( 'Male', 'M' ),
    ( 'Female', 'F' ),
]

REGIONS = [
    ('Ilocos Region', 'REG-I',),
    ('Cagayan Valley Region', 'REG-II'),
    ('Cordillera Administrative Region', 'CAR'),
    ('Central Luzon Region', 'REG-I'),
    ('National Capital Region', 'NCR'),
    ('Calabarzon Region', 'REG-IVA'),
    ('Mimaropa Region', 'REG-IVB'),
    ('Bicol Region', 'REG-V'),
    ('Western Visayas Region', 'REG-VI'),
    ('Central Visayas Region', 'REG-VII'),
    ('Eastern Visayas Region', 'REG-VIII'),
    ('Zamboanga Peninsula Region', 'REG-IX'),
    ('Norther Mindanao Region', 'REG-X'),
    ('Davao Region', 'REG-XI'),
    ('Soccsksargen', 'REG-XII'),
    ('Caraga Region', 'REG-XIII'),
    ('Bangsamoro Autonomous Region in Muslim Mindanao', 'BARMM'),
]


class Identity(models.Model):
    class Meta:
        verbose_name_plural = 'Identities'

    employee_id = models.CharField(max_length=32, unique=True, primary_key=True)
    social_id = models.CharField(max_length=24, null=True, blank=True)
    health_id = models.CharField(max_length=24, null=True, blank=True)
    housing_id = models.CharField(max_length=24, null=True, blank=True)
    tax_id = models.CharField(max_length=24, null=True, blank=True)

    def __unicode__(self):
        return self(Identity)


class Employee(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    last_name = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64)
    middle_name = models.CharField(max_length=64)
    gender = models.CharField(max_length=12, choices=GENDERS, default='')
    birthday = models.DateField(null=True, blank=True)

    def __unicode__(self):
        return self(Employee)


class Contact(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    email = models.EmailField(null=True, blank=True)
    mobile = models.CharField(max_length=32, null=True, blank=True)
    address00 = models.CharField(max_length=128, verbose_name="Apt# and Street")
    address01 = models.CharField(max_length=128, verbose_name="Purok, Sitio, or Village")
    address02 = models.CharField(max_length=128, verbose_name="Barangay")
    address03 = models.CharField(max_length=128, verbose_name="Locality")
    address04 = models.CharField(max_length=128, verbose_name="Province")
    address05 = models.CharField(max_length=128, choices=REGIONS, verbose_name="Region")

    def __unicode__(self):
        return self(Contact)


class Record(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    photo = models.ImageField(upload_to='enterprise/src/assets/human/photos/', null=True, blank=True)
    position = models.CharField(max_length=64, null=True, blank=True)
    department = models.CharField(max_length=64, null=True, blank=True)
    started = models.DateField(null=True, blank=True)
    ended = models.DateField(null=True, blank=True)

    def __unicode__(self):
        return self(Record)
