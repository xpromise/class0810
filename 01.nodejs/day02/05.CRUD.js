
use test

show dbs

/*
	数据库CRUD：
		- Create
			db.collection.insert(文档对象)  向当前数据库中指定集合内插入一条/多条文档数据
			db.collection.insertOne({文档对象})
			db.collection.insertMany([文档对象])
		- Read
			db.collection.find(查询条件[, 投影])  向当前数据库中指定集合内根据查询条件找到所有对应的文档数据
			db.collection.findOne(查询条件[, 投影])
			- 操作符
				1. < <= > >= !==  $lt $lte $gt $gte $ne
				2. 或 $in $or   非 $nin
				3. 正则表达式
				4. $where
			- 投影：过滤掉不想要的字段，只保留应该保留的字段	
		- Update
			db.collection.update(查询条件, 要更新的内容[, 配置对象])
			db.collection.updateOne(查询条件, 要更新的内容[, 配置对象])
			db.collection.updateMany(查询条件, 要更新的内容[, 配置对象])
		- Delete
			db.collection.remove(查询条件)
*/

db.students.find()

db.students.insert({name: 'Jack', age: 18})
db.students.insert([{name: 'Tom', age: 20}, {name: 'Jerry', age: 22}])

db.students.find({age: 18, name: 'Jack'})
db.students.find({age: {$lt: 20}})
db.students.find({$or: [{age: 18}, {age: 20}]})
db.students.find({age: {$in: [18, 20]}})
db.students.find({name: /^T/})
db.students.find({$where: function () {
	return this.name === 'Tom' && this.age === 20
}})

db.students.find({}, {_id: 0, name: 0})  // 一共有10字段，要保留8个
db.students.find({}, {_id: 0, age: 1})  // 一共有10字段，要保留2个

db.students.update({name: 'Tom'}, {age: 19})  // 会将要更新的内容替换掉整个文档对象（_id不受影响）， 默认只更新一个
db.students.update({name: 'Jack'}, {$set: {age: 19}})  //$set 只修改指定字段，其他字段不变
db.students.update({name: 'Jack'}, {$set: {age: 19}}, {multi: true})  //修改多个文档对象 

db.students.remove({age: {$lte: 19}})