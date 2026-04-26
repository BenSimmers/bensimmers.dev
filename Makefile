.DEFAULT_GOAL := help
SHELL         := /bin/zsh

# ─── Colours ──────────────────────────────────────────────────────────────────
RESET  := \033[0m
BOLD   := \033[1m
CYAN   := \033[36m
GREEN  := \033[32m
YELLOW := \033[33m
RED    := \033[31m

# ─── Helpers ──────────────────────────────────────────────────────────────────
define log
	@printf "$(BOLD)$(CYAN)▶ $(RESET)$(BOLD)$(1)$(RESET)\n"
endef

define success
	@printf "$(BOLD)$(GREEN)✔ $(RESET)$(BOLD)$(1)$(RESET)\n"
endef

# ─── Targets ──────────────────────────────────────────────────────────────────

.PHONY: help
help: ## Show this help message
	@printf "\n$(BOLD)$(CYAN)Personal Website — available targets$(RESET)\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-15s$(RESET) %s\n", $$1, $$2}'
	@printf "\n"

.PHONY: install
install: ## Install dependencies
	$(call log,Installing dependencies…)
	pnpm install
	$(call success,Dependencies installed.)

.PHONY: dev
dev: ## Start the Vite development server
	$(call log,Starting development server…)
	pnpm dev

.PHONY: build
build: ## Type-check and build for production
	$(call log,Type-checking and building for production…)
	pnpm build
	$(call success,Build complete → dist/)

.PHONY: preview
preview: build ## Build then serve the production bundle locally
	$(call log,Previewing production build…)
	pnpm preview

.PHONY: deploy
deploy: ## Build and deploy to GitHub Pages
	$(call log,Deploying to GitHub Pages…)
	pnpm deploy
	$(call success,Deployed.)

.PHONY: clean
clean: ## Remove build artefacts
	$(call log,Removing dist/…)
	rm -rf dist
	$(call success,Clean.)
