function DTDValidator() {};

DTDValidator.prototype = {
    checkSyntax: function(title, contents) {
        var problems = [];
        problems.push({
            description: "Just some issue",
            line: 1,
            start: 1,
            end: 4,
            severity: "error"
        });
        problems.push({
            description: "better be warned",
            line: 2,
            start: 1,
            end: 2,
            severity: "warning"
        });
        var result = { problems: problems };
        return result;
    }
};
