ABSTRACT
	This Archetype can be used to create a POM with ${factoryName} properties.

COMMAND
	mvn archetype:generate -DarchetypeGroupId=fr.fastconnect.factory.tibco \
						   -DarchetypeArtifactId=archetype-default-project \
						   -DgroupId=com.company.project \
						   -DartifactId=project-root \
						   -Dversion=1.0.0 \
						   -DprojectName=ProjectName \
						   [-DinteractiveMode=false] 