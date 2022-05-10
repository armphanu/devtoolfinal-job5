# devtoolfinal-job5

# deploy 
  `จะมี2ส่วนคือ docker compose build กับ deploy`
  1. docker compose build
     ```version: "3"  # optional s# deploy 
  `จะมี2ส่วนคือ docker compose build กับ deploy`
  1. docker compose build
     ```version: "3"  # optional since v1.27.0
          services:
           frontend:
            image: armphanu/devtools-final-frontend:1.0.0
            build: ./front-end
          backend:
           image: armphanu/devtools-final-backend:1.0.0
           build: ./back-end 
  2. docker compose deploy   
     ```version: "3"  # optional since v1.27.0
         services:
           frontend:
            image: armphanu/devtools-final-frontend:1.0.0
            ports:
             - "8080:80"
          backend:
           image: armphanu/devtools-final-backend:1.0.0
           ports:
            - "3000:3000"
 ถ้ารันผ่านไปได้โดยไม่ติดอะไร code จะรันอยู่ที่ http://localhost:8080/
  ```
     Jenkins file เขียนไว้แบบ scm 
     ถ้าจะเปลี่ยนไม่ใช้scm สามารถเปลี่ยนโค้ดใน jenkins file ในstep pull code
     checkout scm เปลี่ยน frontend เป็น git branch: 'main', url: 'https://github.com/Thanawat080/finals_devtools.git/front-end'
     เปลี่ยน backend เป็น git branch: 'main', url: 'https://github.com/Thanawat080/finals_devtools.git/back-end' ได้ครับ
  ```
     
### กรณีที่ jenkinsfile รันไม่ได้
 ```
     สามารถรันdockerได้โดย
     1. git clone git clone https://github.com/armphanu/devtoolfinal-job5.git
     2. cd devtoolfinal-job5
     3. docker-compose -f docker-compose-build.yml build frontend
        docker-compose -f docker-compose-deploy.yml up -d frontend
     4. docker-compose -f docker-compose-build.yml build backend
        docker-compose -f docker-compose-deploy.yml up -d backend
```
### กรณีที่ docker รันไม่ได้
 ```
     สามารถรันโค้ดได้โดยตรง
     1. git clone git clone https://github.com/armphanu/devtoolfinal-job5.git
     2. cd devtoolfinal-job5
     3. cd front-end
        npm i
        npm run serve
     4. cd back-end
        npm i
        npm node index.js
```
# ทุกกรณีโค้ดจะรันอยู่ที่ http://localhost:8080/ince v1.27.0
          services:
           frontend:
            image: armphanu/devtools-final-frontend:1.0.0
            build: ./front-end
          backend:
           image: armphanu/devtools-final-backend:1.0.0
           build: ./back-end 
  2. docker compose deploy   
     ```version: "3"  # optional since v1.27.0
         services:
           frontend:
            image: armphanu/devtools-final-frontend:1.0.0
            ports:
             - "8080:80"
          backend:
           image: armphanu/devtools-final-backend:1.0.0
           ports:
            - "3000:3000"
 ถ้ารันผ่านไปได้โดยไม่ติดอะไร code จะรันอยู่ที่ http://localhost:8080/
  ```
     Jenkins file เขียนไว้แบบ scm 
     ถ้าจะเปลี่ยนไม่ใช้scm สามารถเปลี่ยนโค้ดใน jenkins file ในstep pull code
     checkout scm เปลี่ยน frontend เป็น git branch: 'main', url: 'https://github.com/Thanawat080/finals_devtools.git/front-end'
     เปลี่ยน backend เป็น git branch: 'main', url: 'https://github.com/Thanawat080/finals_devtools.git/back-end' ได้ครับ
  ```
     
### กรณีที่ jenkinsfile รันไม่ได้
 ```
     สามารถรันdockerได้โดย
     1. git clone git clone https://github.com/armphanu/devtoolfinal-job5.git
     2. cd devtoolfinal-job5
     3. docker-compose -f docker-compose-build.yml build frontend
        docker-compose -f docker-compose-deploy.yml up -d frontend
     4. docker-compose -f docker-compose-build.yml build backend
        docker-compose -f docker-compose-deploy.yml up -d backend
```
### กรณีที่ docker รันไม่ได้
 ```
     สามารถรันโค้ดได้โดยตรง
     1. git clone git clone https://github.com/armphanu/devtoolfinal-job5.git
     2. cd devtoolfinal-job5
     3. cd front-end
        npm i
        npm run serve
     4. cd back-end
        npm i
        npm node index.js
```
# ทุกกรณีโค้ดจะรันอยู่ที่ http://localhost:8080/
