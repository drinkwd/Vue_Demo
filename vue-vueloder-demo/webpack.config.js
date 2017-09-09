module.exports={
	entry:'./main.js',

	output:{
		path:__dirname,
		filename:'build.js'
	},

	module:{
		loaders:[
			{test:/\.vue$/, loader:'vue'},
			{test:/\.js$/, loader:'babel', exclude:/node_modules/}
		]
	},
	babel:{
		presets:['es2015'],//设置转码规则
		plugins:['transform-runtime']//每次改完之后实时编译
	}
};