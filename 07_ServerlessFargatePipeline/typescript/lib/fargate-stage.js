"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FargateStage = void 0;
const fargate_stack_1 = require("./fargate-stack");
const aws_cdk_lib_1 = require("aws-cdk-lib");
class FargateStage extends aws_cdk_lib_1.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        new fargate_stack_1.FargateStack(this, 'Fargate');
    }
}
exports.FargateStage = FargateStage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFyZ2F0ZS1zdGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhcmdhdGUtc3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQStDO0FBQy9DLDZDQUFnRDtBQUdoRCxNQUFhLFlBQWEsU0FBUSxtQkFBSztJQUNuQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQ3hELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBTkQsb0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXJnYXRlU3RhY2sgfSBmcm9tICcuL2ZhcmdhdGUtc3RhY2snO1xuaW1wb3J0IHsgU3RhZ2UsIFN0YWdlUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuZXhwb3J0IGNsYXNzIEZhcmdhdGVTdGFnZSBleHRlbmRzIFN0YWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWdlUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAgICAgbmV3IEZhcmdhdGVTdGFjayh0aGlzLCAnRmFyZ2F0ZScpO1xuICAgIH1cbn1cbiJdfQ==