default:
	@printf "$$HELP"

# Docker commands
docker-ps:
	@docker-compose ps
docker-up:
	@docker-compose up -d
docker-up-log:
	@docker-compose up -d && docker-compose logs -f
docker-up-build:
	@docker-compose up -d --build

# Install all dependencies:
install:
	@docker-compose -f docker-compose.builder.yml run --rm install
test:
	@docker-compose exec cucumber-course npm test
test-shouty:
	@docker-compose exec cucumber-course npm test /app/src/shouty

define HELP
# First steps:
	- make project-install\t Install all needed for launch project
# Docker commands
	- make docker-ps\t List dockers
	- make docker-up\t Up docker for the current project
	- make docker-up-build\t Up docker for the current project with --build option
 Please execute "make <command>". Example make help

endef

export HELP