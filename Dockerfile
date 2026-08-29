# Base image: Ruby with necessary dependencies for Jekyll
FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user with UID 1000
RUN groupadd -g 1000 vscode && \
    useradd -m -u 1000 -g vscode vscode

# Set the working directory
WORKDIR /usr/src/app

# Copy Gemfile first (for caching)
COPY Gemfile Gemfile.lock ./

# Install bundler and dependencies
RUN gem install bundler:2.3.26
RUN bundle install

# IMPORTANT: Switch to root temporarily to copy files
USER root

# Copy ALL files from your project to the container
COPY . .

# Fix permissions
RUN chown -R vscode:vscode /usr/src/app

# Switch back to non-root user
USER vscode

# Debug: Show what files exist (will appear in build logs)
RUN ls -la

EXPOSE 4000
CMD ["jekyll", "serve", "-H", "0.0.0.0", "-w"]