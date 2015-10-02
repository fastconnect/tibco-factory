==============================
= FastConnect BWMaven plugin =
=                            =
=    Configuration Files     =
==============================

This folder contains basic configuration used by FastConnect BWMaven plugin.

=== Files extensions ===

-> Files ending with "gv.properties" contain Global Variables
-> Files ending with "services.properties" contain instances configuration (PAR level, Service Instance level)

=== Common vs Custom files ===

-> "common.*" files are used for all projects
-> Each project has a specific folder for its custom configuration named by the project's artifactId: ${project.artifactId}

=== Source vs Deploy configuration ===

-> This folder contains only source configuration, there shall not be "server hostnames", "port number", "database credentials" inside these configuration files
-> The properties specific to an environment (TIBCO domain, server, database...) shall be reserved to Deploy configuration (same folder but on each target environment)