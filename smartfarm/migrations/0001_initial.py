# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2018-12-18 13:29
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Compost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plant_id', models.IntegerField()),
                ('compost_type', models.CharField(max_length=30)),
                ('compost_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('create_record_timestamp', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plant_type', models.CharField(max_length=200)),
                ('sensor', models.CharField(max_length=200)),
                ('start_plant_timestamp', models.DateTimeField()),
                ('end_plant_timestamp', models.DateTimeField()),
                ('create_record_timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_harvested', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Vegetable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=200)),
                ('duration', models.IntegerField(validators=django.core.validators.MinValueValidator(0))),
                ('create_record_timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('description', models.TextField()),
            ],
        ),
    ]
