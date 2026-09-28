# COLORS Lab
This lab was an introduction to LAMP stack and basic web development. We used provided files alongside a set of instructions to set up a database which was then interfaced with via HTML -> PHP API endpoints.

## Technologies used
All HTML, CSS, and PHP files were provided. We used Digital Ocean droplets to host these servers, and GoDaddy for the domains. Postman was used to test each API endpoint.

## Setup Instructions
1. Set up a LAMP stack Digital Ocean droplet.
2. Copy all files provided in the "LAMP Stack.zip" file provided in Canvas to the ```/var/www/html``` directory of the droplet. This can be done via the ```scp``` command on UNIX systems.
3. Set up the database by following the MYSQL commands outlined in the instructions provided in the "LAMP Stack.zip" folder.
4. If needed, modify ```$conn``` statements in each api .php file to match the credentials used when setting up the MYSQL database.
5. Test each endpoint with dummy data on Postman.
6. Connect the droplet's public IPv4 address to a domain purchased through GoDaddy. This can be done through the DNS settings pannel on the domain's configuration page on GoDaddy. Connect it to the type A DNS record.
7. Test the application on a web browser by entering the respective domain name.

## NOTE
Due to repurposing of my droplet previously used for the COLORS lab into the small project, my updated/completed files were destroyed, and the files in this repository are shell placeholder files. Due to the fact that I finished the COLORS lab 3 weeks ahead of time, this GitHub assignment was neither created nor available to us by the time I had already completed the lab, repurposed the droplet, and destroyed the original files, so there was no way for me to obtain the originals. I apologize for the inconvenience.
