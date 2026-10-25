from flask import Flask, render_template, jsonify
from config import Config

def create_app():
    """Application factory pattern for configuring and starting Flask."""
    app = Flask(__name__)
    
    # Load settings from Config object
    app.config.from_object(Config)

    # Base route for testing server and serving main template
    @app.route('/')
    def index():
        return render_template('index.html')

    # API Health Check Endpoint (returns JSON response)
    @app.route('/api/health')
    def health_check():
        return jsonify({
            "status": "success",
            "message": "AI Personal Finance Advisor Backend is running smoothly!",
            "version": "1.0.0"
        })

    return app

# Main entry point when running the script directly
if __name__ == '__main__':
    app = create_app()
    print("Starting AI Personal Finance Advisor on http://127.0.0.1:5000")
    app.run(host='127.0.0.1', port=5000, debug=True)
