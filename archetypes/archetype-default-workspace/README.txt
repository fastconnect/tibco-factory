ABSTRACT
	This archetype creates the default workspace.

COMMAND
	mvn archetype:generate -DarchetypeGroupId=fr.fastconnect.factory.tibco \
						   -DarchetypeArtifactId=archetype-default-workspace \
						   -DgroupId=com.company.project \
						   -DartifactId=project-root \
						   -Dversion=1.0.0 \
						   [-DinteractiveMode=false] 