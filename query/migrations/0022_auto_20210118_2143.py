# Generated by Django 3.1.5 on 2021-01-18 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0021_classwiseattendancestatus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='links',
            name='class_day',
            field=models.DateField(default='2021-01-18'),
        ),
    ]