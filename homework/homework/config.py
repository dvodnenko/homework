from os import getenv

from dotenv import load_dotenv


load_dotenv(override=True)

SECRET_APP_KEY: str = getenv('SECRET_KEY')
