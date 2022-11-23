run-debug:
	flask --debug run
run-demo:
	gunicorn3 -e SCRIPT_NAME=/hackaday/clock --bind 0.0.0.0:8024 app:app
