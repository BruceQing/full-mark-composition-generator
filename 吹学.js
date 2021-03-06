schemes['吹学'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['吹学', '历史选择', '权力博弈'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['北宇治高中吹奏部'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['黄前久美子', '我之所以选择北宇治啊，是因为只有这里才有最好看的水手服。'],
        ['黄大叔', '你真的以为我们能进入全国大赛吗？'],
        ['高坂丽奈', '我不甘心，太不甘心了！'],
        ['小笠原晴香', '温柔这种词，是夸没有其他优点的人才用的吧！'],
        ['高板领队', '久美子的性格果然很糟糕啊。'],
        ['伞哥', '我喜欢霙的双簧管。'],
        ['黄前部长', '人真是单纯，一旦知道有回报，就会去努力。努力若有成果，就会加倍努力。'],
        ['伞哥', '冢本秀一没交部费。'],
        ['明日香', '就像霙和希美的那件事，黄前你从头到尾都在旁观，自己拉出一条界限，不肯再深入半步。明明因为好奇而接近他人，却不愿受到伤害，也不愿伤害他人，只是唯唯诺诺，站在安全的地方旁观，你觉得大家会对这样的人说真心话吗？'],
        [久美子', '像小孩又有什么不好。我还想问你为什么要装大人？装的什么都懂的样子，一心认为只有自己是特别的，学姐你也不只是一个高中生吗！'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['想要吹得更好', '', '想要成为特别的人', '其实都无所谓', '进军全国大赛'],
    //至少3个有关第一个学科的性质
    prop: ['历史', '严肃', '吹响'],
    //至少6个有关第一个学科的概念
    conc: ['全国大赛', '吹奏乐', '北宇治', '百合欺诈', '爱的告白', '上低音号'],
    init: function () {
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}