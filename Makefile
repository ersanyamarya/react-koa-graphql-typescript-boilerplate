# Load .env file if existing
-include .env
export

VERBOSE=1



local:
	@docker-compose -f docker-compose.local.yml up
.PHONY: local

prod:
	@docker-compose -f docker-compose.yml up --build
.PHONY: local
