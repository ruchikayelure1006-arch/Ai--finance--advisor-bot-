import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    """Base configuration settings for the AI Personal Finance Advisor application."""
    
    # Secret Key used by Flask for session management and security signing
    SECRET_KEY = os.environ.get('SECRET_KEY', 'default_fallback_key_for_development')
    
    # SQLite Database URI configuration
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///finance_advisor.db')
    
    # Disable SQLAlchemy modification tracking to save memory
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Debug mode flag
    DEBUG = os.environ.get('FLASK_ENV') == 'development'
