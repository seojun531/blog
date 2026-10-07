import { Module } from '@nestjs/common';
import {BlogController} from './blog.controller'
import {BlogService} from './blog.service'
import { BlogFileRepository,BlogMongoRepository } from './blog.repository'
import { MongooseModule } from '@nestjs/mongoose';
import { Blog,BlogSchema } from './blog.schema';

@Module({
  imports:[
    MongooseModule.forRoot(
      'mongodb+srv://parksujun200305_db_user:RZP36yVQxzjnETyB@cluster0.e7d5d30.mongodb.net/?appName=Cluster0/blog'
    ),
    MongooseModule.forFeature([{name:Blog.name,schema:BlogSchema}])
  ],
  controllers:[BlogController],
  providers:[BlogService,BlogFileRepository,BlogMongoRepository]
})
export class AppModule {}
