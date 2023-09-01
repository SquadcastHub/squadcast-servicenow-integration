(function executeRule(current, previous) {
    try {
        var r = new sn_ws.RESTMessageV2();
        r.setEndpoint("https://webhook.site/1c40d843-12ce-4da1-864c-02c2f7e95c6d");
        r.setHttpMethod("post");
        var usr = new GlideRecord('sys_user');
        usr.get('sys_id', current.getValue("caller_id"));
        var reported_by_email = usr.getValue('email');
        var number = current.getValue("number");
        var opened_at = current.getValue("opened_at");
        var impact = current.getValue("impact");
        var urgency = current.getValue("urgency");
        var short_description = current.getValue("short_description");
        var description = current.getValue("description");
        var category = current.getValue("category");
        var priority = current.getValue("priority");
        var sys_id = current.getValue("sys_id");
        var subcategory = current.getValue("subcategory");
        var state = current.getValue("state");
        var due_date = current.getValue("due_date");
        var business_service = current.getValue("business_service");
        var service_offering = current.getValue("service_offering");
        var assigned_to = current.getValue("assigned_to");
        var assignment_group = current.getValue("assignment_group");
        var sla_due = current.getValue("sla_due");
        var problem_id = current.getValue("problem_id");
        var follow_up = current.getValue("follow_up");
        var obj = {
            "number": number,
            "reported_by_email": reported_by_email,
            "opened_at": opened_at,
            "impact": impact,
            "urgency": urgency,
            "short_description": short_description,
            "description": description,
            "category": category,
            "priority": priority,
            "sys_id": sys_id,
            "subcategory": subcategory,
            "state": state,
            "due_date": due_date,
            "business_service": business_service,
            "service_offering": service_offering,
            "assigned_to": assigned_to,
            "assignment_group": assignment_group,
            "follow_up": follow_up,
            "problem_id": problem_id,
            "sla_due": sla_due
        };
        var body = JSON.stringify(obj);
        gs.info("Webhook body: " + body);
        r.setRequestBody(body);
        var response = r.executeAsync();
        response.waitForResponse(10);
        var httpStatus = response.getStatusCode();
    } catch (ex) {
        var message = ex.message;
        gs.error("Error message: " + message);
    }
    gs.info("Webhook target HTTP status response: " + httpStatus);
})(current, previous);
