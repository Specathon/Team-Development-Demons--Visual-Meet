# Generated by Django 3.1.5 on 2021-01-24 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0029_auto_20210124_1108'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classwiseattendancestatus',
            name='class_day',
            field=models.DateField(),
        ),
    ]
